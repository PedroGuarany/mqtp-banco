const defaultHtml = (children) => `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Extrato</title>
  </head>
  <body>
    ${children}
  </body>
</html>
`;

export function generateListOfTransactions(transactions) {
  let body = transactions
    .map((transaction) => {
      return `<li>Transação recebida de ${transaction.nome} de R$${transaction.valor} reais</li>`;
    })
    .join("");

  return defaultHtml(`<ul>${body}</ul>`);
}