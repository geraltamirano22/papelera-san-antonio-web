# Convención de Commits

Este documento establece el estándar obligatorio para escribir commits en este proyecto.

## Formato

```
tipo(scope): descripción corta en tiempo presente
```

## Componentes

### Tipo (type)
Debe ser uno de los siguientes:
- **feat**: Una nueva característica
- **fix**: Corrección de un error
- **docs**: Cambios solo en documentación
- **chore**: Cambios que no afectan el código (dependencias, configuración)
- **refactor**: Cambio de código que no agrega funcionalidad ni corrige errores

### Scope
Nombre del servicio o componente que se modifica:
- `frontend`
- `backend`
- `database`
- `compose`
- `readme`

### Descripción
- Breve y clara
- En tiempo presente (ej: "agrega" en lugar de "agregó")
- Sin punto final al final
- Máximo 72 caracteres recomendado

## Ejemplos Correctos ✅

```
feat(frontend): agrega tabla de integrantes con fetch al backend
fix(backend): corrige ruta del endpoint /api/team
docs(readme): documenta instrucciones de instalación y ejecución
chore(database): agrega script init.sql con tabla members
feat(compose): agrega servicio portainer con volumen persistente
```

## Ejemplos Incorrectos ❌

```
fix                           # Falta scope y descripción
cambios                       # Genérico, no especifica qué
terminado                     # No describe el cambio
wip                           # Work in progress no es descriptivo
arregle cosas                 # Muy vago
feat(frontend): agrega.       # Punto final innecesario
```

## Principios Importantes

### Commits Atómicos
Un commit debe registrar **un único cambio lógico**. No mezcles múltiples funcionalidades.

### Commits Descriptivos
Explica **qué cambió** y **por qué**. El código muestra *cómo*, pero el mensaje debe mostrar la intención.

### Historial Limpio
- Evita commits de "fix typo" o "oops"
- Revisa tus cambios antes de hacer commit
- Si cometiste un error, usa `git amend` antes de hacer push

---


