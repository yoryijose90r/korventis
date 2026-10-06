<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Commercial data (prices, plans, contact info, FAQ) lives only in src/lib/offer.ts — keeps pages from publishing contradictory prices.
- All lead forms use useLeadSubmit: server re-validates (submitLead), then the browser posts to Web3Forms (free plan rejects server calls); success only when Web3Forms returns success:true.
- Brand colors are semantic tokens in src/styles.css; dark sections redefine --sky for contrast — avoid hardcoded colors in components.
