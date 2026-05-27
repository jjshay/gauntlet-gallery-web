export interface Listing {
  id: string
  artist: string
  title: string
  medium: string
  edition: string
  price: string
  condition: string
  ebayUrl: string
  authenticated: boolean
  featured: boolean
}

export const FILTERS = ['All', 'Shepard Fairey', 'KAWS', 'Death NYC'] as const
export type Filter = (typeof FILTERS)[number]

export const ARTIST_COLORS: Record<string, string> = {
  'Shepard Fairey': '#c9a227',
  'KAWS': '#4a9eff',
  'Death NYC': '#e63946',
}

export const LISTINGS: Listing[] = [
  {
    id: 'sf-001',
    artist: 'Shepard Fairey',
    title: 'Obey Giant — Supply & Demand (Signed)',
    medium: 'Silkscreen on paper',
    edition: 'Signed & Numbered, Edition of 450',
    price: '$1,250',
    condition: 'Mint',
    ebayUrl: 'https://www.ebay.com/str/gauntletgallery',
    authenticated: true,
    featured: true,
  },
  {
    id: 'sf-002',
    artist: 'Shepard Fairey',
    title: 'Andre the Giant Has a Posse — Original Sticker',
    medium: 'Offset lithograph',
    edition: 'Open edition, early run circa 1990s',
    price: '$425',
    condition: 'Near Mint',
    ebayUrl: 'https://www.ebay.com/str/gauntletgallery',
    authenticated: true,
    featured: false,
  },
  {
    id: 'kaws-001',
    artist: 'KAWS',
    title: 'COMPANION (Passing Through) Vinyl Figure',
    medium: 'Painted cast vinyl',
    edition: 'Open edition',
    price: '$2,800',
    condition: 'New in Box',
    ebayUrl: 'https://www.ebay.com/str/gauntletgallery',
    authenticated: true,
    featured: false,
  },
  {
    id: 'kaws-002',
    artist: 'KAWS',
    title: 'SHARE — Limited Edition Print',
    medium: 'Screenprint on paper',
    edition: 'Edition of 500',
    price: '$1,900',
    condition: 'Mint',
    ebayUrl: 'https://www.ebay.com/str/gauntletgallery',
    authenticated: true,
    featured: false,
  },
  {
    id: 'dn-001',
    artist: 'Death NYC',
    title: 'Marilyn Monroe — Pop Street Print',
    medium: 'Screenprint on paper',
    edition: 'Limited edition, signed',
    price: '$650',
    condition: 'Excellent',
    ebayUrl: 'https://www.ebay.com/str/gauntletgallery',
    authenticated: true,
    featured: false,
  },
  {
    id: 'dn-002',
    artist: 'Death NYC',
    title: 'Mickey Mouse — Subversive Pop Print',
    medium: 'Screenprint on paper',
    edition: 'Limited edition, signed',
    price: '$575',
    condition: 'Near Mint',
    ebayUrl: 'https://www.ebay.com/str/gauntletgallery',
    authenticated: true,
    featured: false,
  },
]
