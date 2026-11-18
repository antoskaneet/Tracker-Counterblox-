import { Button } from "../../../shared/ui/Button";
import user_icon from "./user-round.svg";
import { getProfile, useProfile } from "../model/useProfile";
import "./ProfileSidebar.css";

import { Modal } from "../../../shared/ui/Modal";
import { useState } from "react";

export function ProfileSidebar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { login } = useProfile();

    function handleUsername() {
        console.log(getProfile());
        setIsModalOpen(false);
    }

    return (
        <>
            <Button
                className="profile-button"
                label={"Профиль " + (getProfile() ?? "")}
                onClick={() => setIsModalOpen(true)}
                icon={user_icon}
            />

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
            <h2 className="profile-modal-title">Введите имя</h2>

            <input
                className="profile-input"
                type="text"
                onChange={(event) => login(event.target.value)}
                placeholder="Введите имя"
            />

            <button className="profile-submit" onClick={handleUsername}>
                Готово
            </button>
            </Modal>
        </>
    );
}