import { useState } from 'react'
import { LISTINGS, FILTERS, ARTIST_COLORS, type Listing, type Filter } from './listings'

const ListingCard = ({ listing }: { listing: Listing }) => {
  const accent = ARTIST_COLORS[listing.artist] ?? '#c9a227'

  return (
    <article className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-4 gap-2">
      <div className="flex items-center justify-between">
        <p className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: accent }}>
          {listing.artist}
        </p>
        {listing.authenticated && (
          <span className="rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide bg-white/10 text-gray-300">
            ✓ Auth
          </span>
        )}
      </div>

      <p className="text-sm font-bold leading-snug text-white">{listing.title}</p>
      <p className="text-[11px] text-gray-500">{listing.medium}</p>
      <p className="text-[11px] text-gray-500">{listing.edition}</p>

      <div className="my-1 h-px w-full opacity-20" style={{ backgroundColor: accent }} />

      <div className="flex items-center justify-between">
        <span className="text-base font-bold text-white">{listing.price}</span>
        <span className="text-[11px] text-gray-400">{listing.condition}</span>
      </div>

      <a
        href={listing.ebayUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 w-full rounded-lg py-2 text-[11px] font-bold uppercase tracking-wider text-center transition-opacity hover:opacity-90 active:opacity-70 block"
        style={{ backgroundColor: accent, color: '#0b0f1a' }}
      >
        View on eBay →
      </a>
    </article>
  )
}

export const App = () => {
  const [filter, setFilter] = useState<Filter>('All')

  const visible = filter === 'All' ? LISTINGS : LISTINGS.filter((l) => l.artist === filter)

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white">
      {/* Sticky header */}
      <header className="sticky top-0 z-10 bg-[#0b0f1a]/95 backdrop-blur px-5 pt-5 pb-3 border-b border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#c9a227] font-semibold">
              Gauntlet Gallery
            </p>
            <h1 className="text-lg font-bold">Authenticated Art Collection</h1>
          </div>
          <p className="text-sm text-gray-400">
            {visible.length} piece{visible.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Filter tabs */}
        <nav className="flex gap-2 overflow-x-auto pb-1" aria-label="Filter by artist">
          {FILTERS.map((f) => {
            const active = f === filter
            const color = f === 'All' ? '#c9a227' : (ARTIST_COLORS[f] ?? '#c9a227')
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide transition-all"
                style={
                  active
                    ? { backgroundColor: color, color: '#0b0f1a' }
                    : { border: `1px solid ${color}40`, color }
                }
                aria-pressed={active}
              >
                {f === 'All' ? 'All Artists' : f.split(' ').pop()}
              </button>
            )
          })}
        </nav>
      </header>

      {/* Grid */}
      <main className="p-4">
        {visible.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-gray-500 text-sm">No pieces found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {visible.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </main>

      {/* SEO text block — crawlable by search engines and LLMs */}
      <section className="px-5 pb-6 pt-2 text-gray-600 text-[11px] leading-relaxed max-w-2xl mx-auto">
        <p>
          Gauntlet Gallery specializes in authenticated street art and contemporary art by{' '}
          <strong className="text-gray-500">Shepard Fairey</strong>,{' '}
          <strong className="text-gray-500">KAWS</strong>, and{' '}
          <strong className="text-gray-500">Death NYC</strong>. Every piece in our collection
          includes a certificate of authenticity. We sell exclusively through our verified eBay
          store, ensuring buyer protection on every transaction.
        </p>
      </section>

      <footer className="px-5 pb-8 pt-2 text-center border-t border-white/5">
        <a
          href="https://www.ebay.com/str/gauntletgallery"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-gray-600 hover:text-gray-400 transition-colors"
        >
          View full store on eBay →
        </a>
      </footer>
    </div>
  )
}
