---
sidebar_position: 4
---

# Obtener y Configurar el Certificado Digital SUNAT

## Requisitos Previos

- Contar con RUC y clave SOL de SUNAT.
- Tener acceso a Internet.
- Dispositivo con navegador web actualizado.

---

## 1. Acceso a SUNAT

Ir a la página de SUNAT:

🔗 [https://www.sunat.gob.pe/sol.html](https://www.sunat.gob.pe/sol.html)

Seleccionar la opción **"Mis trámites y consultas"**.

![Acceso a SUNAT](/img/certificate-creation/step_1.jpg)

---

## 2. Ingreso al Sistema

Iniciar sesión con las credenciales del RUC (número de RUC, usuario y clave SOL).

![Ingreso al Sistema](/img/certificate-creation/step_2.jpg)

---

## 3. Solicitar el Certificado Digital

- Seleccionar **"Empresas"**.
- Escribir en el buscador la palabra **"certificado"**.
- Seleccionar la opción que aparece relacionada con certificado digital.

![Solicitar Certificado Digital - Parte 1](/img/certificate-creation/step_3.1.jpg)

![Solicitar Certificado Digital - Parte 2](/img/certificate-creation/step_3.2.jpg)

---

## 4. Enviar Solicitud

- Se mostrará información de la empresa.
- Aceptar los términos y condiciones.
- Hacer clic en **"Enviar solicitud"**.

![Enviar Solicitud](/img/certificate-creation/step_4.jpg)

---

## 5. Confirmación de Solicitud

- Aparecerá un mensaje de confirmación.
- Hacer clic en **"Aceptar"**.
- Luego, se mostrará un mensaje con un enlace.
- Hacer clic en el **link** para crear la contraseña del certificado.

![Confirmación de Solicitud](/img/certificate-creation/step_5.jpg)

---

## 6. Crear Contraseña y Descargar Certificado

- Al hacer clic en el enlace, se abrirá una nueva pestaña.
- Crear una contraseña siguiendo los parámetros de seguridad solicitados.
- Descargar el archivo del certificado digital (.p12).

![Crear Contraseña](/img/certificate-creation/step_6.1.jpg)
![Descargar Certificado](/img/certificate-creation/step_6.2.jpg)

---

## 7. Convertir Certificado a Formato PEM

- Ir a la siguiente página:

🔗 [https://www.leaderssl.es/tools/ssl_converter](https://www.leaderssl.es/tools/ssl_converter)

- Subir el archivo `.p12`.
- Ingresar la contraseña del certificado.
- Hacer clic en **"Convertir"** para obtener el archivo en formato **PEM**.

![Convertir Certificado](/img/certificate-creation/step_7.jpg)

---

## 8. Cargar el Certificado PEM en el Sistema de Facturación

- Ingresar al **módulo Empresa** en el sistema de facturación.
- Seleccionar el archivo `.pem`.
- Hacer clic en **"Actualizar"**.
- Después del mensaje de éxito, hacer clic en **"Producción"** para finalizar el proceso.

![Cargar Certificado PEM](/img/certificate-creation/step_8.jpg)

![Mensaje Final](/img/certificate-creation/step_9.jpg)

---

> **Nota final:** Asegúrate de almacenar de forma segura la contraseña del certificado y el archivo PEM, ya que son necesarios para la firma de documentos electrónicos.
