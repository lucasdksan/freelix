export const handleCopy = (value: number | string) => {
    navigator.clipboard.writeText(`${value}`)
        .then(()=>{
            alert("Valor copiado com sucesso!");
        });
};