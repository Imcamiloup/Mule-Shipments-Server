# Mule-Server

Mule-Server es un backend desarrollado en Node.js utilizando Express y Sequelize para gestionar una aplicación de logística y transporte. Este proyecto incluye funcionalidades para manejar usuarios, conductores, vehículos, envíos, sucursales, reseñas, y más.

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecución](#ejecución)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Endpoints Principales](#endpoints-principales)
- [Contribuciones](#contribuciones)

## Requisitos

- Node.js (v16 o superior)
- PostgreSQL
- Una cuenta de SendGrid para el envío de correos electrónicos
- Una cuenta de MercadoPago para la integración de pagos

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Imcamiloup/Mule-Shipments-Server.git
   cd mule-server
   ```

2. Instala las dependencias

```bash
   npm install
```

## Configuración

1. Crean un archivo .env en la raiz del proyecto clonado

```env
# Archivo .env de configuración
PORT=3000
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
DATABASE_NAME=nombre_de_tu_base_de_datos
JWT_SECRET=tu_secreto_jwt
SENDGRID_API_KEY=tu_api_key_de_sendgrid
EMAIL_FROM=tu_correo@ejemplo.com
FRONT_END_URL=http://localhost:3000
BACK_END_URL=http://localhost:3000
ADMIN_USERNAME=admin
ADMIN_EMAIL=admin@ejemplo.com
ADMIN_PASSWORD=admin123
ADMIN_ROLE=admin
ADMIN_ISACTIVE=true
```

2. Configura tu base de datos PostgreSQL y asegurate de que las credenciales coincidan con las variables de entorno

## Ejecución

- Modo desarrollo:

```bash
   npm run dev
```

- Modo producción:

```bash
   npm start
```

## Estructura del Proyecto

```md
Mule-Server/
├── .env
├── .gitignore
├── [index.js](http://_vscodecontentref_/0)
├── [package.json](http://_vscodecontentref_/1)
├── [README.md](http://_vscodecontentref_/2)
├── src/
│ ├── server.js
│ ├── controllers/
│ ├── database/
│ ├── email/
│ ├── handlers/
│ ├── models/
│ ├── routes/
│ └── utils/
```

### Descripción de Carpetas

- **controllers/**: Contiene la lógica de negocio para cada entidad.
- **database/**: Configuración de Sequelize y modelos de base de datos.
- **email/**: Gestión de correos electrónicos (SendGrid).
- **handlers/**: Manejo de solicitudes HTTP.
- **models/**: Definición de modelos de Sequelize.
- **routes/**: Definición de rutas de la API.
- **utils/**: Funciones auxiliares y validaciones.

## Endpoints Principales

#### Usuarios

- **GET** `/users`: Obtiene todos los usuarios.
- **POST** `/users/register`: Registra un nuevo usuario.
- **POST** `/users/login`: Inicia sesión.

#### Conductores

- **GET** `/drivers`: Obtiene todos los conductores.
- **POST** `/drivers`: Crea un nuevo conductor.

#### Vehículos

- **GET** `/vehicles`: Obtiene todos los vehículos.
- **POST** `/vehicles`: Crea un nuevo vehículo.

#### Envíos

- **GET** `/order_shipments`: Obtiene todos los envíos.
- **POST** `/order_shipments`: Crea un nuevo envío.

#### Sucursales

- **GET** `/branches`: Obtiene todas las sucursales.
- **POST** `/branches`: Crea una nueva sucursal.

#### Pagos

- **POST** `/payments`: Crea una preferencia de pago en MercadoPago.

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, abre un issue o envía un pull request para sugerir mejoras o solucionar problemas.
