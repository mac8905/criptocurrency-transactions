# criptocurrency-transactions

## Description

Supongamos que tenemos una api para hacer compra y venta de criptomonedas. Esta api te cobra cuando haces transacciones (compra o venta). Dependiendo la cantidad de unidades que hayas echo en los últimos 30 días (ya sea compra o venta), incluyendo el día de hoy, es lo que te cobra. Aquí estan las cantidades que te cobran según la cantidad:

```ts
>= 10,0000 : 1%
>= 10,000 & < 100,000 : 3%
< 10,000 : 5%
```

Las transacciones de 3 usuarios son las siguientes:

```json
[
  {
    "id": "1",
    "name": "Juan",
    "transactions": [
      {
        "date": "2022-03-04T00:00:00.000Z",
        "quantity": "20000"
      },
      {
        "date": "2022-03-03T00:00:00.000Z",
        "quantity": "5000"
      },
      {
        "date": "2022-03-02T00:00:00.000Z",
        "quantity": "5000"
      },
      {
        "date": "2022-02-28T00:00:00.000Z",
        "quantity": "50000"
      },
      {
        "date": "2022-02-22T00:00:00.000Z",
        "quantity": "30000"
      }
    ]
  },
  {
    "id": "2",
    "name": "Javier",
    "transactions": [
      {
        "date": "2022-02-01T00:00:00.000Z",
        "quantity": "200000"
      }
    ]
  },
  {
    "id": "3",
    "name": "Miguel",
    "transactions": []
  }
]
```

- No es necesario tener autenticación (por tiempo)
- No es necesario tener una base de datos (por tiempo)
- Generar un endpoint para comprar monedas que muestre cuanto tiene que pagar según los siguientes casos:

  - Miguel hace dos transacciones de 10k, cuanto le cobra? // 3%
  - Javier hace una transacción de 5k, cuanto le cobra? Juan hace una transacción de 20k, cuanto le cobra?

- Cuando usuarios con mas de 100k hacen transacciones, se les da el 1% en monedas de nuestro servicio, imprimir las monedas ganadas por usuario

## How to run

1. Install dependencies `yarn`
2. Transpile the code `yarn build`
3. Start app `yarn start`

## Glossary

- charge: cobro
- purchase: compra
- rate: tarifa
- transactions: compra o venta
- units / quantity: unidades
- units earned: unidades ganadas

## Send email to

Fernando <fcruz@arkusnexus.com>
