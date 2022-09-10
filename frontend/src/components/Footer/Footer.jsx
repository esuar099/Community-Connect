import styles from './Footer.module.scss';
import Image from "next/image";

export function Footer() {
    return (
      <footer>
        <div className = {styles.container} >
          <div className = {styles.textImage} >
            <Image
              src = "/assets/CC FIU Footer Logo.png"
              height = {"52px"}
              width = {"112px"}
                />

          </div>

          <div className = {styles.logoImage} >
            <Image 
              src = "/assets/CC NSF Footer Logo.png"
              height = {"130px"}
              width = {"130px"} 
              />
          
          </div>
        </div>
      </footer>
    );
}
