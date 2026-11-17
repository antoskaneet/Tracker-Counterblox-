import "./Sidebar.css";
import { useNavigate } from "react-router";
import { Button } from "../../../shared/ui/Button";
import arrow_up from "./arrow-up-from-line.svg"

export function Sidebar() {
    const navigate = useNavigate();

    return (
        <aside className="sidebar">
            <Button label="Загрузить Матч" onClick={() => navigate("/import-match")}icon={arrow_up}>


            </Button>


        </aside>
    );
}