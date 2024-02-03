import Image from "next/image";


const Platform = ({platform}:{platform:string})=>{
    if(platform === 'instagram'){
        return <Image
        src="/assets/icons/instagram.svg"
        alt="zelf Logo"
        height={24}
        width={24}
      />
    }
    else {
        return <Image
        src="/assets/icons/tiktalk.svg"
        alt="zelf Logo"
        height={24}
        width={24}
      />
    }
    
}

export default Platform;
