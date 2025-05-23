import { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import classNames from 'classnames';
import { IoClose } from 'react-icons/io5';
import Login from '@components/ContentSideBar/LogIn/Login';
import Compare from '@components/ContentSideBar/Compare/Compare';
import WishList from '@components/ContentSideBar/WishList/WishList';
import Cart from '@components/ContentSideBar/Cart/Cart';
import DetailProduct from '@components/ContentSideBar/DetailProduct/DetailProduct';

function SideBar() {
  const { container, overlay, sideBar, slideSideBar, boxIocn } = styles;
  const { isOpen, setIsOpen, type } = useContext(SideBarContext);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleRenderContent = () => {
    switch (type) {
      case 'login':
        return <Login />;
      case 'compare':
        return <Compare />;
      case 'wishlist':
        return <WishList />;
      case 'cart':
        return <Cart />;
      case 'detail':
        return <DetailProduct />;

      default:
        return <Login />;
    }
  };

  return (
    <div className={container}>
      <div
        className={classNames({
          [overlay]: isOpen,
        })}
        onClick={handleToggle}
      />
      <div
        className={classNames(sideBar, {
          [slideSideBar]: isOpen,
        })}
      >
        {isOpen && (
          <div className={boxIocn}>
            <IoClose onClick={handleToggle} />
          </div>
        )}
        {handleRenderContent()}
      </div>
    </div>
  );
}

export default SideBar;
