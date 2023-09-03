import Banner from '../Banner';
import banner from '../../assets/banner.png';
import {
  BoxBanner,
  Player,
  PlayerBanner,
  TextBanner1,
  TextBanner2,
  TextBanner3,
  TextBoxBanner,
} from '../BoxBanner';
import player from '../../assets/player.png';

const BannerMain = () =>{
  return (
    <>
      <Banner $background={banner}>
            <BoxBanner>
              <TextBoxBanner>
                <TextBanner1>Front End</TextBanner1>
                <TextBanner2>Challenge React</TextBanner2>
                <TextBanner3>
                  Este challenge es una forma de aprendizaje. Es un mecanismo
                  donde podrás comprometerte en la resolución de un problema
                  para poder aplicar todos los conocimientos adquiridos en la
                  formación React.
                </TextBanner3>
              </TextBoxBanner>
              <PlayerBanner>
                <Player src={player}></Player>
              </PlayerBanner>
            </BoxBanner>
          </Banner>
    </>
  )
}

export default BannerMain;