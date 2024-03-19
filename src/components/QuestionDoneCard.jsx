import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import Card from "./Card";
import Logo from "./Logo";
import heart from "../assets/heart.svg";
import qrRegister from "../assets/QrRegister.png";
import Button from "../components/Button";

Modal.setAppElement('#root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
    border: 'none',
  },
};
export default function QuestionDoneCard(props) {
  const { isMember, isShowHeart, imageUrl, qrUrl } = props;
  const navigate = useNavigate();
  const [isOpen, setOpen] = React.useState(false);
  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }
  return (
    <>
      <Card width={'100%'} marginTop={'48px'} padding={'48px'}>
        <div className="question-done-card">
          <Logo color="orange" isHideLogo={true} height={"120px"} marginTop={"0"} marginBottom={"24px"} zIndex={0} />
          <div className="question-done-card-title">
            Lorem ipsum dolor sit amet consectetur. tincidunt aliquet sed<br />
          </div>
          {(isMember && isShowHeart) && (
            <div className="heart-added">
              <img className="heart-added-image" src={heart} />
              <div className="heart-added-point">+300</div>
            </div>
          )}
          <div className="reward-image-panel">
            <img className="reward-image" src={imageUrl} />
          </div>
          {!isMember && (
            <div className="qr-panel">
              <div className="mini-qr-panel">
                <img className="mini-qr-image" src={qrUrl} />
                <p className="mini-qr-text">Save Image</p>
              </div>
              <div className="qr-panel-or-text">
                หรือ
              </div>
              <div className="mini-qr-panel">
                <img className="mini-qr-image" src={qrRegister} />
                <p className="mini-qr-text">Register</p>
              </div>
            </div>
          )}
        </div>
      </Card>
      <div className="question-done-button-panel">
        {isMember && (
          <Button
            type="secondary"
            label="บันทึกรูปภาพ"
            onClick={() => openModal()}
          />
        )}
        <Button
          type="secondary"
          label="กลับสู่หน้าหลัก"
          onClick={() => navigate("/")}
        />
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel=""
      >
        <Card width={'100%'} marginTop={0} padding={'50px'}>
          <div className="modal-done-card">
            <div className="modal-done-card-title">
              Lorem ipsum dolor sit amet consectetur.<br />Lorem tincidunt aliquet sed
            </div>
            <div className="modal-qr-panel">
              <img className="modal-qr-image" src={qrUrl} />
            </div>
            <Button
              type="secondary"
              label="กลับสู่หน้าหลัก"
              onClick={() => navigate("/")}
            />
          </div>
        </Card>
      </Modal>
    </>
  );
}
