import "./Sidebar.css";
import { useNavigate } from "react-router";
import { Button } from "../../../shared/ui/Button";
import arrow_up from "./arrow-up-from-line.svg"
import { ProfileSidebar } from "../../../features/profile-user/ui/ProfileSidebar";


export function Sidebar() {
    const navigate = useNavigate();

    return (
        <aside className="sidebar">
            <Button label="Загрузить Матч" onClick={() => navigate("/import-match")}icon={arrow_up}></Button>
            <Button label="Ваши Матчи" onClick={() => navigate("/match-history")}icon={arrow_up}></Button>
            <ProfileSidebar/>

        </aside>
    );  
}