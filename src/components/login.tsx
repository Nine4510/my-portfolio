import "@fortawesome/fontawesome-free/css/all.min.css";
import { useStore } from "@nanostores/solid";
import { createSignal, Show } from "solid-js";
import { isLogin } from "../logic/authStore";
import "../public.css"
import { login } from "../services/authService";

export default function() {
    const [email, setEmail] = createSignal<string>("");
    const [password, setPassword] = createSignal<string>("");
    const [isLoading, setIsLoading] = createSignal<boolean>(false);

    const store = useStore(isLogin);

    const handleLogin = async (e: SubmitEvent) => {
        e.preventDefault();
        setIsLoading(true);
        const user = await login(email(), password());
        setIsLoading(false);
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
                <button type="submit" class="button">
                    { isLoading() ? (<i class="fas fa-solid fa-circle-notch fa-spin"></i>) : (<p>Login</p>) }
                </button>
            </form>
        </div>
    )
}