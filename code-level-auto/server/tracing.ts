import * as opentelemetry from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto';
import { resourceFromAttributes } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';

const sdk = new opentelemetry.NodeSDK({
  traceExporter: new OTLPTraceExporter({
    // optional - default url is http://localhost:4318/v1/traces
    url: 'https://ingest.<region>.signoz.cloud:443/v1/traces', // url is optional and can be omitted 
      headers: {
        "signoz-access-token": "<your-ingestion-key>"
      } // an optional object containing custom headers to be sent with each request
  }),
  instrumentations: [getNodeAutoInstrumentations()],
  resource:  resourceFromAttributes({
    // highlight-next-line
    [SemanticResourceAttributes.SERVICE_NAME]: '<service_name>'
  })
});
sdk.start();
