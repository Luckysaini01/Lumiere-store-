# LUMIÈRE — Haute Couture Digital Lookbook & Atelier
link:https://lumiere-store01.netlify.app/

A high-fashion, ultra-luxury digital lookbook and e-commerce web application inspired by contemporary editorial fashion magazines. Crafted with a monochrome palette, typographic pairings of serif display headers and minimalist body text, and an asymmetric layout system.

---

## 🌟 Overview & Screens

The application features four core editorial viewports along with client concierge drawers and modals:

### 1. Digital Lookbook (`Home`)
- **The Winter Anthology**: Full-bleed atmospheric hero banner with direct **Shop The Look** action.
- **Curated Ateliers Carousel**: Horizontal scroll showcasing circular collections (*Dresses, Outerwear, Accessories, Footwear, Tailoring*).
- **Issue No. 04 — Essentialism**: Asymmetrical editorial presentation of *The Monolith Coat* and botanical study.
- **Brand Philosophy**: Typographic editorial quote highlighting the Maison's ethos.

### 2. Collection 004 / L'Essence (`Shop`)
- **Asymmetric Fashion Grid**: Offsets and staggered margins showcasing *The Archival Trench*, *Structure Top*, *Silk Narrative*, *The Void Trousers*, *Leather Obscura*, and *Linear Layering*.
- **Interactive Wishlist Sync**: Heart toggles for instant saving and synchronization across sessions.
- **Sticky Sleek Filter Bar**: Quick toggles for Size, Palette (*Mono, Oat, Noir*), and Fabric (*Wool, Silk, Canvas, Leather, Cotton*).
- **Floating Action Button (FAB)**: Launches the sliding **Curation Index** filter drawer.

### 3. Editorial Product Detail (`Fluid Silk Slip Dress`)
- **Multi-Angle Asymmetric Gallery**: Portrait silhouette, woven silk macro texture, studio back view, and landscape editorial scene.
- **Size Selector & Atelier Guide**: Standard couture sizes (XS–L) with an interactive **Size Guide Modal** supporting Centimeters and Inches with international conversions (IT, FR, US).
- **Interactive Accordions**: Expandable details on OEKO-TEX® certified mulberry silk and dry cleaning instructions.
- **Complete the Look**: Quick-access accessory pairings (*Strappy Heel*, *Vault Clutch*, *Helix Earrings*).
- **Add to Bag**: Real-time feedback with instant cart updating.

### 4. Curated Wishlist (`Wishlist`)
- **Asymmetrical 4-Item Composition**: Direct reproduction of the editorial wishlist layout (*Sculpted Silk Gown, Archive Clutch, Structured Blazer, Lumière Trench*).
- **Move to Bag**: Transfers selected runway items straight into the active shopping bag and clears them from saved items.
- **Item Removal & Empty State**: Interactive removal with toast notifications and fallback empty curation view.

### 5. Client Concierge & Shopping Bag
- **Shopping Bag Slide-Over**: Item quantity adjustments, line removals, subtotal calculation, complimentary white-glove courier shipping, and secure checkout confirmation modal.
- **Global Atelier Menu**: Drawer with links to seasonal collections and flagship boutique addresses in Milan, Paris, and Tokyo.
- **Private Salon & Profile**: *L'Élite Privée* membership credentials, silhouette fit notes, and a private fitting reservation form.
- **Editorial Screen Switcher**: Discreet bottom bar allowing 1-click preview switching between the four key screens.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite 6
- **Styling**: Tailwind CSS v4 with custom font tokens and glassmorphism utilities
- **Typography**: Google Fonts — *Noto Serif* (Headlines) & *Inter* (Body/Labels)
- **Icons**: Lucide React
- **Animations**: CSS transitions, hardware-accelerated transforms, and keyframe fades

---

## 📁 Project Structure

```text
├── index.html                  # Entry HTML with preloaded fonts and metadata
├── metadata.json               # Applet metadata, frame permissions, capabilities
├── package.json                # Project dependencies and build scripts
├── tsconfig.json               # TypeScript compiler configuration
├── vite.config.ts              # Vite plugins and server configuration
├── src/
│   ├── main.tsx                # React application root entry point
│   ├── App.tsx                 # Root application state, view router, and drawer controllers
│   ├── index.css               # Tailwind CSS theme tokens and glassmorphism classes
│   ├── types.ts                # TypeScript interfaces (Product, CartItem, FilterOptions, etc.)
│   ├── data/
│   │   └── products.ts         # Mock product catalogue, gallery URLs, and categories
│   └── components/
│       ├── Navigation.tsx      # Top app bar, desktop navigation links, and bottom mobile bar
│       ├── HomeLookbook.tsx    # Digital lookbook hero, carousel, and editorial cards
│       ├── ShopCatalog.tsx     # Collection 004 catalog with asymmetric layout & sticky filter bar
│       ├── ProductDetail.tsx   # Detailed product view, specs, accordions, and complete-the-look
│       ├── WishlistView.tsx    # Asymmetric 4-card wishlist with "Move to Bag" functionality
│       ├── ShoppingBagDrawer.tsx # Slide-out bag drawer with quantity adjustments & checkout
│       ├── FilterDrawer.tsx    # Full-featured curation index slide-in panel
│       ├── SizeGuideModal.tsx  # Measurements table with cm/inch toggles and international sizing
│       ├── MenuDrawer.tsx      # Atelier index and global boutique locations
│       └── ProfileView.tsx     # Private client salon, sizing preferences, and appointment form
