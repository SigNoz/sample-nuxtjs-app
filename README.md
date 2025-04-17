# Nuxt JS Sample App

This repository provides two approaches to integrate **OpenTelemetry** with your Nuxt app to send traces to **SigNoz Cloud**.

You can choose one of the following instrumentation methods:

## 📁 Folder Structure

```
.
├── no-code-auto       # No-code automatic instrumentation
├── code-level-auto    # Code-level instrumentation using a tracing file
```

## 🔧 How to Use

- **No-Code Auto Instrumentation**:  
  Requires no changes to your application code. Just configure environment variables and run your app.  
  👉 See [`no-code-auto/README.md`](./no-code-auto/README.md)

- **Code-Level Auto Instrumentation**:  
  Involves creating a `tracing.ts` file and importing it manually in your app.  
  👉 See [`code-level-auto/README.md`](./code-level-auto/README.md)

Both methods help you monitor performance and trace issues with SigNoz. Pick the one that fits your needs best!
