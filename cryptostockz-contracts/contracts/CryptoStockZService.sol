//SPDX-License-Identifier: None
// solium-disable linebreak-style
pragma solidity >=0.4.21;

// import "./ProductToken.sol";
import "./StockZStorage.sol";
import "./Ownable.sol";
import "./Product.sol";
import 'https://github.com/OpenZeppelin/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol';

contract CryptoStockZ is Ownable, ERC721 {
    
    constructor() ERC721("Stock Z Products", "SZP") public{}
    StockZStorage stockZStorage = new StockZStorage(msg.sender);  // Creamos el storage 1.0

    event createProductEvent(address _owner, string _name, string _ean, string _sku, uint256 _numberTransactions, uint8 _level);
    event transferTokenEvent(address _from, address _to, address _idProduct);

    function createProduct(string memory _ean, string memory  _sku, string memory _name) public {
        Product product = new Product(_ean,_sku,_name);
        uint256 tokenId = stockZStorage.getProducts().length;
        stockZStorage.setProduct(product);
        stockZStorage.setPositionProduct(product.getAddress(), tokenId);
        _mint(msg.sender, tokenId);
        emit createProductEvent(msg.sender,_name,_ean,_sku,0,0);
    }
    
    function transferProduct(address _to, address _idProduct) public {
        emit transferTokenEvent(msg.sender, _to, _idProduct);
        uint256 tokenId = stockZStorage.getProductToken(_idProduct);
        _transfer(msg.sender, _to, tokenId);
        stockZStorage.setProduct(stockZStorage.getProducts()[tokenId]);
    }

    function getProducts()public view returns(Product[] memory) {
        return stockZStorage.getProducts();
    }
    
    function getProductFromAddress(address _idProduct) public view returns(string memory, string memory, string memory, uint, uint8){
        uint256 tokenId = stockZStorage.getProductToken(_idProduct);
        return(stockZStorage.getProducts()[tokenId].getName(), stockZStorage.getProducts()[tokenId].getEan(),stockZStorage.getProducts()[tokenId].getSku(),stockZStorage.getProducts()[tokenId].getTransactions(), stockZStorage.getProducts()[tokenId].getLevel());
    }
    
    function getOwnerOfProduct(address _idProduct) public view returns(address){
        uint256 tokenId = stockZStorage.getProductToken(_idProduct);
        return super.ownerOf(tokenId);
    }
}



