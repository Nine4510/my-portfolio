import "@fortawesome/fontawesome-free/css/all.min.css";
import { createSignal, Show } from "solid-js";
import { SpinnerCircular } from "spinners-react";
import "../public.css"
import { login, user } from "../services/authService";

export default function() {
    const [email, setEmail] = createSignal<string>("");
    const [password, setPassword] = createSignal<string>("");
    const [isLoading, setIsLoading] = createSignal<boolean>(true);

    const handleLogin = async (e: SubmitEvent) => {
        debugger;
        e.preventDefault();
        console.log('login');
    }

    return (
        <div>
            <div class="font-bold text-2xl mb-3 text-white">Login</div>
            <form class="grid grid-cols-1 text-white w-full gap-2" onSubmit={ handleLogin }>
                <div class="relative">
                    <input class="form-style" type="email" placeholder="Email" 
                        value={ email() } onChange={ (e) => setEmail(e.currentTarget.value) } required/>
                    <div class="icon-prefix">
                        <i class="fas fa-user text-gray-600"></i>
                    </div>
                </div>
                <div class="relative">
                    <input class="form-style" type="password" placeholder="Password" 
                        value={ password() } onChange={ (e) => setPassword(e.currentTarget.value) } required/>
                    <div class="icon-prefix">
                        <i class="fas fa-lock text-gray-600"></i>
                    </div>
                </div>
                <button type="submit" class="button">Login</button>
            </form>
        </div>
    )
}