export default function BotaoConsole() {
    function mostrarMensage() {
        console.log("Mensagem legal")
    }
    
    return(
        <div id="BotaoConsole">
            <button onClick={mostrarMensage}>Mostrar mensagem no console</button>
        </div>
    )
}