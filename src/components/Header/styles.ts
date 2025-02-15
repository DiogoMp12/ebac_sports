import styled from 'styled-components';
import { cores } from '../../styles';

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 20px 50px;
  background: ${cores.corFundo};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const NavIcons = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const IconWrapper = styled.div`
  position: relative;
  cursor: pointer;

  .icon {
    font-size: 24px;
    color: ${cores.corTexto};
    transition: color 0.3s;

    &:hover {
      color: ${cores.corPrincipal};
    }
  }

  .cesta-icon {
    width: 28px;
    height: 28px;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -12px;
  background: ${cores.corPrincipal};
  color: white;
  border-radius: 50%;
  padding: 3px 8px;
  font-size: 12px;
  font-weight: bold;
`;

export const CartWrapper = styled.div`
  position: relative;

  &:hover > div {
    display: block;
  }
`;

export const CartDropdown = styled.div`
  display: none;
  position: absolute;
  right: 0;
  top: 100%;
  width: 350px;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 20px;
  border-radius: 8px;
`;

export const CartItem = styled.div`
  display: flex;
  gap: 15px;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  align-items: center;
  position: relative;

  img {
    border-radius: 4px;
    width: 40px;
    height: 40px;
    object-fit: cover;
  }

  .remove-icon {
    position: absolute;
    right: 0;
    cursor: pointer;
    color: ${cores.corTexto};
    opacity: 0.6;
    transition: all 0.3s;

    &:hover {
      color: ${cores.corPrincipal};
      opacity: 1;
    }
  }
`;

export const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 2px solid ${cores.corPrincipal};

  strong {
    color: ${cores.corPrincipal};
  }
`;

export const EmptyCart = styled.p`
  text-align: center;
  color: ${cores.corTexto};
  opacity: 0.7;
`;

export const ClearButton = styled.button`
  width: 100%;
  background: ${cores.corPrincipal};
  color: white;
  border: none;
  padding: 12px;
  margin-top: 15px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${cores.corSecundaria};
  }
`;
