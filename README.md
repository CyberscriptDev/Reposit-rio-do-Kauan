# Microfrontend Cyberscript Dev

>  **Atenção!** Breve descrição da função deste repositório.

[Tecnologias](#tecnologias)

[Como instalar](#como-instalar)

[Como utilizar](#como-utilizar)

[Testes e  Deploy](#teste-e-deploy)

[Erros comuns](#erros-comuns)

[Responsável](#responsavel)

## Tecnologias
![MicroFrontend](https://img.shields.io/badge/Microfronend-4c9cbe?style=for-the-badge "MicroFrontend") 
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white "Typescript")
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Styledcomponents](https://img.shields.io/badge/Styledcomponents-373737?style=for-the-badge&logo=styledcomponents&logoColor=white "Styledcomponents")

## Como instalar
**Instalar pacotes NodeJs**

    $ yarn

**Rodar projeto localmente**

    $ yarn start

**Build**

    $ yarn build

## Como utilizar

### Estrutura dos componentes

Os componentes foram divididos em:

- **Componentes atômicos**: componentes comuns à aplicação no menor nível;
- **Componentes moleculares**: componentes comuns à aplicação no nível médio e que intregram componentes atômicos;
- **Componentes organismos**: componentes específicos de cada repositório/tela da aplicação;
- **Componentes templates**: componentes organizados em páginas para mock dos atributos;

#### Arquivos com componentes atômicos

>  **Atenção!** Colocar aqui os componentes atômicos, se houver.

#### Arquivos com componentes moleculares

>  **Atenção!** Colocar aqui os componentes moleculares, se houver.

#### Exemplo de arquivos com componentes organismos

>  **Atenção!** Colocar aqui os componentes organismos, se houver.

#### Exemplo de arquivos com componentes templates

>  **Atenção!** Colocar aqui os componentes templates, se houver.

## Teste e Deploy

Os testes acompanham as pastas dos componentes e são identificados da seguinte forma:

````
Buttons/__tests__/Buttons.spec.tsx
````

Todos os componentes devem ter, no mínimo, teste unitário de renderização, garantindo assim 100% de cobertura de testes automatizados;

````
$ yarn test
````

Os testes estão integrados na esteira de CI/CD do Github.

## Erros comuns

>  **Atenção!** É natural que possa surgir erros comuns ao utulizar o seu repositório. Seria uma boa manter aqui os erros comuns já mapeados.

## Responsavel
Esse repositório é mantido por:

**Projeto**: Cyberscript Dev

**Responsável**: [nome](endereço do perfil no github),
