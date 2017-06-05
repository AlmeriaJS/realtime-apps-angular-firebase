# Real-time apps con Angular y Firebase
Presentación para AlmeríaJS acerca de las real-time apps con Angular y Firebase

Tienes disponibles las transparencias en **/slides** y la demo en **/live-demo**

---

## ¿Cómo probar la demo?

### 0. Prerrequisitos
Necesitas Angular CLI, typings y TypeScript.

```bash
npm install -g @angular/cli@latest
# or install locally
npm install @angular/cli --save-dev
# make sure you have typings installed
npm install -g typings
npm install -g typescript
```

### 1. Descarga o clona el repositorio y dirígete a la carpeta de live-demo
```bash
cd live-demo
```

### 2 Instala los paquetes de npm
En el package.json ya están incluídas las librerias de angularfire2 y firebase, instaladas durante la live demo

```bash
cd live-demo
npm install
```

### 3. Crea tu proyecto en Firebase y consigue los detalles de conexión
Crea una cuenta en la consola de Firebase https://console.firebase.google.com/ y crea un proyecto.

Una vez lo hayas creado, indica que quieres añadir Firebase a tu aplicación web. Ahí encontrarás los detalles de conexión

```html
<script src="https://www.gstatic.com/firebasejs/4.1.1/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "XXXXXXX",
    authDomain: "XXXXXXXXXX.firebaseapp.com",
    databaseURL: "https://XXXXXXXXXX.firebaseio.com",
    projectId: "XXXXXXXXXX",
    storageBucket: "XXXXXXXXXX.appspot.com",
    messagingSenderId: "XXXXXXXXXX"
  };
  firebase.initializeApp(config);
</script>
```

Sustituye dichos valores en **src/environments/environment.ts**

```javascript
export const environment = {
  production: false,
  firebase: {
    apiKey: "XXXXXXX",
    authDomain: "XXXXXXXXXX.firebaseapp.com",
    databaseURL: "https://XXXXXXXXXX.firebaseio.com",
    projectId: "XXXXXXXXXX",
    storageBucket: "XXXXXXXXXX.appspot.com",
    messagingSenderId: "XXXXXXXXXX"
  }
};
```

### 4 Abre las reglas de acceso a tu proyecto Firebase
Para el ejercicio de la live-demo, hemos definido un acceso libre a nuestra instancia de Firebase Realtime DB (sin autenticación).

Para ello, nos dirigimos a Settings -> Database -> Reglas y sobrescribimos con:

```json
{"rules":{".read":"true",".write":"true"}}
```

### 5 Corre la aplicación con el servidor web de desarrollo de Angular CLI
En el package.json ya están incluídas las librerias de angularfire2 y firebase, instaladas durante la live demo

```bash
ng serve
```
