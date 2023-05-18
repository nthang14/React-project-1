import Banner from '~/components/pages/Home/Banner';
import Collection from '~/components/pages/Home/Collection';
import ModalWelcome from '~/components/pages/Home/ModalWelcome';
import PickForYou from '~/components/pages/Home/PickForYou';
import BestSeller from '~/components/pages/Home/BestSeller';
import FlashDeal from '~/components/pages/Home/FlashDeal';
import homeDate from '~/utils/constants/mock-data/homeData';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getConfig } from '~/store/home';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getConfig(homeDate));
  });
  const setting = useSelector((state) => state.home.setting);
  return (
    <div>
      {setting && (
        <div className="pb-2">
          <Banner data={setting.banner} />
          <div className="pt-1.5 container mx-auto">
            <Collection data={setting.collections} />
          </div>
          <div className="pt-1.5 container mx-auto">
            <FlashDeal data={setting.flashDeal} />
          </div>
          <div>
            <ModalWelcome data={setting.modalWelcome} />
          </div>
          <div className="pt-1.5 container mx-auto">
            <PickForYou data={setting.pickForYou} />
          </div>
          <div className="pt-1.5 container mx-auto">
            <BestSeller data={setting.bestSeller} />
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;
