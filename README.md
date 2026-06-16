# UK Take Home Pay Calculator

A static HTML and JavaScript calculator for estimating UK take-home pay, benefit-in-kind tax impact, pension accumulation, RSU vesting, ESPP deductions, and cashflow by period.

Live site, once GitHub Pages is enabled:

https://allupaku.github.io/uk-take-home-pay-calculator/

## Features

- Base salary, car allowance, target bonus, taxable cash, tax-free cash, and payroll deductions
- Employee and employer pension contribution estimates
- Private healthcare, dental, Gymflex, and other benefit-in-kind inputs
- RSU and ESPP tax/NI estimates with USD-to-GBP conversion
- Monthly, quarterly, half-year, and annual cashflow chart
- Optional pension sensitivity table
- Browser-session keys for saving multiple calculation scenarios locally
- Session history drawer with scenario summaries and a clear-all-sessions option
- Printable annual summary with calculation notes, per-month payslip statements from cashflow rows, and HMRC-oriented reconciliation guide

## Privacy

This is a personal side project with no advertising and no profit motive.

The calculator does not collect data and does not submit your salary, pension, benefits, RSU, ESPP, or tax inputs to a server. Session data is stored in your own browser `sessionStorage` so a generated key can reload that scenario in the same browser session.

## Disclaimer

This tool is for personal planning only. It is not legal, tax, financial, pension, payroll, or employment advice. The calculations are estimates and should not be treated as legally authoritative.

Verify important figures with payroll, HMRC guidance, or a qualified adviser. The author accepts no legal responsibility for use of this tool or decisions made from it.

## Development

This is a standalone static site. Open `index.html` directly in a browser, or serve the folder with any static web server.

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/pages.yml` that deploys the static site to GitHub Pages when changes are pushed to `main`.
