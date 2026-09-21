# Python Ledger Sync & Accounting Webhook Parser

A lightweight utility toolkit designed to streamline bank feed reconciliation, parse high-volume transaction CSVs, and handle secure webhook payloads for modern cloud accounting platforms (QuickBooks Online, Xero, and custom ledgers).

## Features
* **Automated CSV Ingestion:** Uses `pandas` to clean, normalize, and map multi-currency transaction exports.
* **Idempotent Webhook Handlers:** Prevents double-entry errors by validating event headers and tracking processed transaction IDs.
* **Error Logging:** Automatically flags unmapped tax codes or mismatched ledger totals into structured audit logs.

## Quick Start

```python
import pandas as pd

def process_bank_feed(file_path):
    # Load and clean transaction export
    df = pd.read_csv(file_path)
    df['Cleaned_Amount'] = df['Amount'].abs()
    print(f"Processed {len(df)} transactions successfully.")
    return df
