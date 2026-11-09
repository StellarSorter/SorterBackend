{{/*
Chart name, truncated to the 63-char DNS label limit.
*/}}
{{- define "stellarsorter-backend.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Fully qualified app name.
*/}}
{{- define "stellarsorter-backend.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{- define "stellarsorter-backend.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{- define "stellarsorter-backend.labels" -}}
helm.sh/chart: {{ include "stellarsorter-backend.chart" . }}
{{ include "stellarsorter-backend.selectorLabels" . }}
app.kubernetes.io/version: {{ .Values.image.tag | default .Chart.AppVersion | quote }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
app.kubernetes.io/part-of: stellarsorter
{{- end }}

{{- define "stellarsorter-backend.selectorLabels" -}}
app.kubernetes.io/name: {{ include "stellarsorter-backend.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{- define "stellarsorter-backend.serviceAccountName" -}}
{{- if .Values.serviceAccount.create }}
{{- default (include "stellarsorter-backend.fullname" .) .Values.serviceAccount.name }}
{{- else }}
{{- default "default" .Values.serviceAccount.name }}
{{- end }}
{{- end }}

{{/*
Secret holding the app's sensitive env vars.
*/}}
{{- define "stellarsorter-backend.secretName" -}}
{{- default (include "stellarsorter-backend.fullname" .) .Values.secrets.existingSecret }}
{{- end }}

{{/*
Secret holding the JWT signing keys file.
*/}}
{{- define "stellarsorter-backend.jwtKeysSecretName" -}}
{{- default (printf "%s-jwt-keys" (include "stellarsorter-backend.fullname" .)) .Values.jwtSigningKeys.existingSecret }}
{{- end }}

{{- define "stellarsorter-backend.image" -}}
{{- printf "%s:%s" .Values.image.repository (.Values.image.tag | default .Chart.AppVersion) }}
{{- end }}

{{/*
Shared env sources for the API and migration containers.
*/}}
{{- define "stellarsorter-backend.envFrom" -}}
- configMapRef:
    name: {{ include "stellarsorter-backend.fullname" . }}
- secretRef:
    name: {{ include "stellarsorter-backend.secretName" . }}
{{- end }}
