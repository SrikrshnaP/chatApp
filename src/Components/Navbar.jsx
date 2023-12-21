import { UserAuth } from "../Context/AuthContext"

function Navbar() {
    const {currentUser, logout} = UserAuth();

    const handleLogout = async() => {
        try {
            await logout();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="containerWrap flex justify-between">
                <button className="btn btn-ghost text-xl">Eavesdrop Customer Care</button>
                {currentUser ? <button onClick={handleLogout}>Logout</button>: ""}
            </div>
        </div>
    )
}

export default Navbar