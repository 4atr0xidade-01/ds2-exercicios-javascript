# Fundamentos da Web


### Em qual momento uma página dinâmica é processada?

Uma página dinâmica é processada no momento em que o servidor recebe a requisição do navegador. O servidor executa a lógica necessária, podendo gerar o conteúdo da página antes de enviar a resposta ao navegador.

### Por que um banco de dados pode ser necessário?

Um banco de dados pode ser necessário para armazenar e consultar informações que serão utilizadas na geração da página dinâmica. Por exemplo, em uma página de perfil, os dados do usuário podem estar armazenados no banco de dados. Quando o usuário acessa seu perfil, o servidor consulta essas informações e monta a resposta com os dados correspondentes.

## Comparação entre Client-side e Server-side

| Característica | Client-side | Server-side |
|---|---|---|
| Local em que o código é executado | No navegador do usuário | No servidor |
| Tecnologias de exemplo | HTML, CSS e JavaScript | PHP, Python, Java, Node.js |
| Responsabilidades | Alterar a página, responder a cliques e fazer algumas validações | Acessar banco de dados, cuidar de informações e regras do sistema |
| Vantagens | É rápido para ações simples e não precisa enviar tudo para o servidor | É mais seguro para dados importantes e pode trabalhar com banco de dados |
| Limitações | Não é adequado para guardar informações secretas | Pode depender da conexão com o servidor |
| Exemplos de tarefas | Mudar cores, mostrar mensagens e validar campos | Consultar clientes, verificar login e controlar sessões |

    
## Classificação das operações


**1 Validar se um campo obrigatório foi preenchido — Client-side.**
Pode ser feito no navegador antes de enviar o formulário. Isso permite avisar rapidamente o usuário que falta preencher alguma informação.

**2 Consultar dados sigilosos de um cliente — Server-side.**
Como são informações sigilosas, o acesso deve ser feito no servidor. Assim, os dados não ficam expostos diretamente no navegador.

**3 Alterar a cor de um botão após um clique — Client-side.**
O JavaScript pode detectar o clique e mudar a cor do botão diretamente na página.

**4 Verificar login e senha em um banco de dados — Server-side.**
O servidor é responsável por consultar o banco de dados e verificar se os dados de login estão corretos. Não é seguro fazer essa consulta diretamente no navegador.

**5 Calcular o total de uma compra — Possível em ambos.**
O cálculo pode ser feito no navegador para mostrar o resultado rapidamente ao usuário. Porém, o servidor também pode fazer o cálculo novamente para confirmar o valor antes de finalizar a compra.

**6 Controlar uma sessão de usuário — Server-side.**
O servidor pode controlar se o usuário está logado e quais páginas ou informações ele pode acessar. Isso é importante para manter o controle e a segurança do sistema.



## Exercício 1

**Erro proposital**

Foi trocado `console.log` por `Console.log`, colocando a letra C em maiúsculo.

A mensagem apresentada foi `Uncaught ReferenceError: Console is not defined`.

O erro aconteceu porque o JavaScript diferencia letras maiúsculas de minúsculas. O correto é usar `console.log` com o c minúsculo.

## Exercício 4

### Por que 20 + 5 pode resultar em 205?

Quando usamos `prompt()`, o valor digitado é recebido como texto (string), mesmo que o usuário digite um número.

Por exemplo, se o usuário digitar 20, o JavaScript recebe `"20"`. Então, ao fazer `"20" + 5`, o JavaScript entende que precisa juntar os valores, resultando em `"205"`.

Por isso precisamos converter o valor para número usando `Number()` antes de fazer a soma.

Assim, `Number("20") + 5` resulta em `25`.