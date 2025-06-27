# Colabdevs Boilerplate Next.js 2025

Um template inicial para aplicações Next.js com as melhores práticas e tecnologias modernas.

## 🚀 Tecnologias Incluídas

- **Next.js 15** - Framework React para produção
- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes React reutilizáveis
- **React Query (@tanstack/react-query)** - Gerenciamento de estado servidor
- **Axios** - Cliente HTTP para APIs
- **Sonner** - Sistema de notificações toast
- **Lucide React** - Ícones modernos

## 📋 Pré-requisitos

- Node.js 18.17 ou superior
- npm, yarn, pnpm ou bun

## 🛠️ Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd frontend_c88_ccb
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas configurações:
```env
REACT_APP_API_URL=http://localhost:3001/api
```

## 🚀 Executando o Projeto

### Desenvolvimento
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Produção
```bash
# Build
npm run build
yarn build
pnpm build

# Start
npm run start
yarn start
pnpm start
```

## 🏗️ Estrutura do Projeto

```
src/
├── actions/          # Lógica de negócio e hooks customizados
├── app/             # App Router do Next.js
├── components/      # Componentes React reutilizáveis
│   ├── ui/         # Componentes base do shadcn/ui
│   ├── counter/    # Componente contador
│   └── theme-switcher/ # Alternador de tema
├── contexts/        # Contexts do React
├── lib/            # Utilitários e configurações
└── services/       # Serviços externos (APIs)
```

## 🎨 Funcionalidades

### ✅ Implementadas

- [x] **Contador Global**: Persistido no localStorage com React Query
- [x] **Theme Switcher**: Alternador dark/light mode
- [x] **Cliente Axios**: Configurado com interceptadores
- [x] **Sistema de Toast**: Notificações com Sonner
- [x] **Componentes UI**: Biblioteca shadcn/ui configurada

### 🔄 Em Desenvolvimento

- [ ] **Autenticação**: Sistema de login/logout
- [ ] **Middleware de Autenticação**: Proteção de rotas
- [ ] **Formulários**: Validação com React Hook Form + Zod
- [ ] **Testes**: Jest + Testing Library

## 🎯 Como Usar

### Contador Global
```tsx
import { useCount, useIncrementCount } from '@/actions/home';

function MyComponent() {
  const { data: count } = useCount();
  const { mutate: increment } = useIncrementCount();
  
  return (
    <button onClick={() => increment()}>
      Contador: {count}
    </button>
  );
}
```

### Theme Switcher
```tsx
import { useTheme } from '@/contexts/theme-context';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Tema atual: {theme}
    </button>
  );
}
```

### Cliente API
```tsx
import apiClient from '@/services/api';

// GET request
const response = await apiClient.get('/users');

// POST request
const newUser = await apiClient.post('/users', { name: 'João' });
```

## 🔧 Comandos Úteis

```bash
# Linting
npm run lint

# Build para produção
npm run build

# Análise do bundle
npm run analyze

# Limpar cache
npm run clean
```

## 📚 Documentação Adicional

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [React Query](https://tanstack.com/query/latest)
- [Axios](https://axios-http.com/docs/intro)

## 🤝 Contribuição

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/amazing-feature`)
3. Commit suas mudanças (`git commit -m 'Add some amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🏢 Colabdevs

Desenvolvido com ❤️ pela equipe [Colabdevs](https://colabdevs.com)
