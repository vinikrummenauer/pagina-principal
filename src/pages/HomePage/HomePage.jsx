import { React, useState, useEffect  } from 'react';
import PaginaPrincipal from '../../components/PaginaPrincipal';
import 'bootstrap/dist/css/bootstrap.min.css'

const HomePage =  () => {
    const [data , setData] = useState('');
    const teste = localStorage.getItem("user");
    const teste2 = JSON.parse(teste);
    const [cont, setCont] = useState(0);

    if(teste === null || teste === undefined){
        if (localStorage.getItem("componente") !== "RegisterPage" && localStorage.getItem("componente") !== "LoginPage"
            && localStorage.getItem("componente") !== "NewPassword" && localStorage.getItem("componente") !== "Confirmation"
            && localStorage.getItem("componente") !== "ResetPassword") {
            localStorage.setItem("componente", "LoginPage");
        }
    } else {
        if (localStorage.getItem("componente") === "RegisterPage" || localStorage.getItem("componente") === "LoginPage"
            || localStorage.getItem("componente") === "NewPassword" || localStorage.getItem("componente") === "Confirmation"
            || localStorage.getItem("componente") === "ResetPassword") {
            if (teste2.perfil[0] === 'cliente') {
            localStorage.setItem("componente", "MeusVeiculos");
            } else if (teste2.perfil[0] === 'monitor') {
                localStorage.setItem("componente", "ListarVagasMonitor");
            } else if (teste2.perfil[0] === 'parceiro') {
                localStorage.setItem("componente", "RegistrarEstacionamentoParceiro");
            } else if (teste2.perfil[0] === 'admin') {
                localStorage.setItem("componente", "Dashboard");
            }
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setCont(cont + 1)
        }, 500);
        setData(localStorage.getItem("componente"));
    }, [cont])

    return (
        <>
            <main className="main">
                    {data === '' ? null : <PaginaPrincipal />}
            </main>   
        </>
    )
}

export default HomePage;