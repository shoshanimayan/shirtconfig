import { proxy } from "valtio";
//const downloadUrl = new URL('./threejs.png', import.meta.url);

const state = proxy({
    intro:true,
    color: '#dc6601', 
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:"Art/threejs.png",
    fullDecal: "Art/threejs.png",
});


export default state;