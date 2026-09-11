# Standalone Gallery — Project Brief

## At a glance

| Field | Value |
|---|---|
| Portfolio area | Search and growth |
| Repository | [jjshay/gauntlet-gallery-web](https://github.com/jjshay/gauntlet-gallery-web) |
| Status | Source available; runtime not revalidated in this documentation review |
| Evidence review | 2026-09-11; [commit 487af24](https://github.com/jjshay/gauntlet-gallery-web/tree/487af24c1753a4f477f92a84b6b90346340ea697) |

## Problem and intended value

A gallery needs a shareable standalone presentation of inventory and artist context.

The intended value is a repeatable workflow whose inputs, transformations, and outputs can be inspected. Use the evidence below to distinguish implementation from business outcomes.

## Architecture and data flow

Typed listing data → React artist filters → product cards and structured presentation.

```mermaid
flowchart LR
    N0["Typed listing data"]
    N1["React artist filters"]
    N2["product cards and structured presentation"]
    N0 --> N1
    N1 --> N2
```

## Implementation evidence

| Source | Reading purpose |
|---|---|
| [src/App.tsx](../src/App.tsx) | Application entry point, interface, or integration boundary. |
| [src/listings.ts](../src/listings.ts) | Implementation component supporting the data flow described above. |

The links above point to the current repository. The review reference identifies the version used to prepare this brief.

## Setup and operation

Use the existing [README](../README.md) for setup and operating commands. Configuration and dependency references: [package.json](../package.json).

Start with sample or fixture inputs. Where external services are involved, configure a test account and check the distinction between a local preview, a generated artifact, and a remote write. Credentials and operational datasets are environment-specific.

## Validation and outcomes

**Review result:** Repository tree and referenced source reviewed. Existing application tests, hosted deployments, paid providers, and external mutations were not re-run in this documentation review.

No conventional test suite was identified in the reviewed repository tree; validation should begin with the next improvement below.

The source implements the workflow described above. No new revenue, accuracy, conversion, or production-uptime result is asserted by this documentation update.

Documentation itself is checked by `python3 scripts/check_project_docs.py`; that check validates this structure and its source references, not application behavior.

## Decisions and limitations

A standalone site is simple to distribute but must manage freshness separately from the commerce source of truth.

Keep provider-dependent observations dated and separate from deterministic transformations. State which assumptions a demonstration uses and which integrations it actually exercises.

## Interview talking points

- **Problem and product judgment:** Explain why this workflow mattered to its intended operator: A gallery needs a shareable standalone presentation of inventory and artist context.
- **Technical walkthrough:** Trace one concrete input through this sequence: Typed listing data → React artist filters → product cards and structured presentation.
- **Engineering tradeoff:** A standalone site is simple to distribute but must manage freshness separately from the commerce source of truth.
- **Evidence and ownership:** Open the source links above, identify the specific design or implementation decisions you personally drove, and distinguish AI-assisted implementation from measured operating results.
- **What comes next:** Verify crawlable output and inventory freshness; measure actual citations instead of assuming distribution creates visibility.

## Next improvements

Verify crawlable output and inventory freshness; measure actual citations instead of assuming distribution creates visibility.

Record any follow-up result with a date, exact command or evaluation method, input scope, observed output, and limitations. Update `project.json` alongside this brief.

## Related projects

- [GEO Program Map](https://github.com/jjshay/GEO) — Search and growth.
- [AI Visibility Score](https://github.com/jjshay/ai-score) — Search and growth.
- [Artist Index Factory](https://github.com/jjshay/gauntlet-artist-index-factory) — Search and growth.
- [KAWS Figurine Index](https://github.com/jjshay/gauntlet-kaws-figurine-index) — Search and growth.
- [Homegrown Growth Workbench](https://github.com/jjshay/homegrown-ai-search-growth) — Search and growth.

Some related repositories require authorized GitHub access.
