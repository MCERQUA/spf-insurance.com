#!/usr/bin/env bash
# Generate all images for spf-insurance.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/spf-insurance.com/public/images"
mkdir -p "$OUT"

# gen <fname> <prompt> [steps] [width] [height]
gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"; shift || true
  local w="${1:-1024}"; shift || true
  local h="${1:-1024}"; shift || true
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps ${w}x${h})..."
    curl -s --max-time 200 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" --argjson w "$w" --argjson h "$h" '{inputs:$p, parameters:{num_inference_steps:$s, width:$w, height:$h}}')" \
      -o "$dest"
    local ftype; ftype=$(file -b "$dest" 2>/dev/null)
    local sz; sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then head -c 200 "$dest"; echo ""; fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 10 images — SPF Insurance (spf-insurance.com) ===

gen "hero.jpg" \
  "Photorealistic clean technical wide shot of SPF applicator in full PPE spraying polyurethane foam in commercial building, cool gray technical photography, no text" 4

gen "coverage.jpg" \
  "Photorealistic clean technical aerial view of spray foam insulation project, precision professional photography, no text" 4

gen "about.jpg" \
  "Photorealistic clean professional portrait of SPF insurance specialist at modern technical office, no text" 4

gen "og-image.jpg" \
  "Photorealistic clean wide technical photo of SPF contractor operation with precision equipment, no text" 4 1216 640

gen "spf-contractor-gl.jpg" \
  "Photorealistic clean technical photo of spray polyurethane foam being applied on commercial roof, precision photography, no text" 4

gen "contractor-pollution-liability.jpg" \
  "Photorealistic clean technical photo of SPF applicator in respiratory PPE, chemical exposure safety, no text" 4

gen "workers-compensation.jpg" \
  "Photorealistic clean technical photo of SPF crew following safety protocol at commercial site, no text" 4

gen "commercial-auto.jpg" \
  "Photorealistic clean technical photo of SPF spray rig truck with proportioner system, no text" 4

gen "rig-insurance.jpg" \
  "Photorealistic clean technical close-up of spray foam proportioner controls and hose connections, no text" 4

gen "umbrella.jpg" \
  "Photorealistic clean technical photo of insurance specialist reviewing SPF coverage specs at desk, no text" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
