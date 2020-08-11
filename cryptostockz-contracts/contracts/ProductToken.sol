pragma solidity ^0.6.3;
import 'https://github.com/OpenZeppelin/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol';
import './Product.sol';
import './StockZStorage.sol';
contract ProductToken is ERC721{
//      // Diferencia entre transfer y approved
//     /**
//     Transfer transfiere directamente el token de from a to
//     function transferFrom(address from, address to, uint256 tokenId)

//     envía la misma información que el caso anterior. Después, el contrato almacena quién está 
//     autorizado para tomar un token, generalmente en un mapping (uint256 => address). Entonces, cuando alguien
//     llame a takeOwnership, el contrato comprueba si ese msg.sender está autorizado por el propietario para
//     tomar ese token y si es así, le transfiere el token.
//     function approve(address to, uint256 tokenId)

//     La función mint es por la que se crea un token (https://www.youtube.com/watch?v=7TiXsOLiIrc)
//     _safeMint(address to, uint256 tokenId)
//     */
//     //StockZStorage stockZStorage = new StockZStorage(msg.sender);
    constructor() ERC721("Stock Z Products", "SZP") public{}


//     //This function initialize the token associated to a Product
    function mint(address _to, uint256 tokenId ) public {
//         /** Product product = new Product(_ean,_sku,_name);  
//         uint256 tokenId = stockZStorage.getProducts().length;
//         stockZStorage.setProduct(_to, product);
//         stockZStorage.setPositionProduct(product.getAddress(), tokenId);
//         */
        _mint(_to, tokenId);
    }
    
//    

//     //return the product´s owner
    function getOwner(uint256 _tokenId) public view returns(address){
        return super.ownerOf(_tokenId);
    }


    
    function transferToken(address _from, address _to, uint256 _tokenId) public{
        _transfer(_from, _to, _tokenId);
//         uint256 tokenId = stockZStorage.getProductToken(_idProduct);
//         
//         stockZStorage.setProduct(_to, stockZStorage.getProducts()[_tokenId]);
    }

}
