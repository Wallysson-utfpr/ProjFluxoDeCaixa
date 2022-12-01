const add_conta = document.querySelector("#adicionarConta");

      add_conta.addEventListener("click", function (e) {
        e.preventDefault();
        const nome_conta = document.querySelector("#nomeConta").value;
        const nConta = nome_conta;

        console.log(nome_conta);
      })

    

