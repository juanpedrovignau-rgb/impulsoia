import { useState } from 'react';
import './SalPatagoniaPage.css';

const IMAGES_BASE = '/images/saldelapatagonia/';

const BRANDS = [
  {
    id: 'Sal de la Patagonia',
    num: '01',
    archetype: 'Apothecary Orgánico',
    title: 'Sal de la Patagonia',
    concept: 'Inspirado en la mística de las expediciones de 1898 y la marca país. Es evocador, narrativo y de alto impacto internacional.',
    premium: { img: 'v3_patagonia_jar_black_label.png', alt: 'Sal de la Patagonia Premium', tag: 'Premium · Frasco' },
    volume: {
      defaultImg: 'sal_patagonia_volumen_claro.png',
      alt: 'Sal de la Patagonia Volumen',
      tag: 'Volumen · Doypack',
      switchers: [
        { key: 'claro', img: 'sal_patagonia_volumen_claro.png', style: { backgroundColor: '#f4f1ec', border: '1px solid #7e7d79' }, title: 'Lino Claro' },
        { key: 'negro-ventana', img: 'v3_patagonia_doypack_window.png', style: { background: 'linear-gradient(135deg, #1a1a1a 50%, #f4f1ec 50%)', border: '1px solid #7e7d79' }, title: 'Negro con Ventana' },
        { key: 'negro-letras', img: 'sal_patagonia_volumen.png', style: { backgroundColor: '#1a1a1a', border: '1px solid #1a1a1a' }, title: 'Negro con Tipografía Blanca' },
      ],
    },
    specs: [
      { label: 'Premium Jar', value: 'Vidrio borosilicato + madera + etiqueta negra mate' },
      { label: 'Doypack Volumen', value: 'Lino claro, Negro mate con ventana o Negro mate con tipografía blanca (500g)' },
      { label: 'Tipografía', value: 'Serif clásica (estilo editorial botánico)' },
      { label: 'Canal Comercial', value: 'Boutiques gourmet internacionales, aeropuertos, regalos' },
    ],
  },
  {
    id: 'Sal Austral',
    num: '02',
    archetype: 'Clásico & Geográfico',
    title: 'Sal Austral',
    concept: 'Directo, imponente y con fuerte arraigo territorial. Evoca la inmensidad del sur y tiene excelente recordación comercial.',
    premium: { img: 'sal_austral_premium.png', alt: 'Sal Austral Premium', tag: 'Premium · Frasco' },
    volume: { defaultImg: 'sal_austral_volumen.png', alt: 'Sal Austral Volumen', tag: 'Volumen · Doypack con Visor' },
    specs: [
      { label: 'Premium Jar', value: 'Vidrio alto + tapa negra + etiqueta negra' },
      { label: 'Doypack Volumen', value: 'Negro mate + visor inferior + silueta patagónica' },
      { label: 'Tipografía', value: 'Sans-serif geométrica bold de alta legibilidad' },
      { label: 'Canal Comercial', value: 'Delis locales, tiendas gourmet de alta rotación' },
    ],
  },
  {
    id: 'Atlántico Sur',
    num: '03',
    archetype: 'El Objeto Coleccionable',
    title: 'Atlántico Sur',
    concept: 'Posicionamiento en el segmento de lujo botánico. Estética de laboratorio con etiquetas oscuras, tipografía geométrica y anotaciones técnicas que evocan coordenadas y diarios de expedición.',
    premium: {
      defaultImg: 'atlantico_sur_premium.png',
      alt: 'Atlántico Sur Premium',
      tag: 'Premium · Envase',
      switchers: [
        { key: 'original', img: 'atlantico_sur_premium.png', style: { backgroundColor: '#8a8a8a', border: '1px solid #7e7d79' }, title: 'Frasco Ámbar Coordenadas' },
        { key: 'lujo-oro', img: 'atlantico_sur_premium_ref.png', style: { background: 'linear-gradient(135deg, #1a1a1a 50%, #c5a059 50%)', border: '1px solid #7e7d79' }, title: 'Frasco Lujo Negro/Oro' },
      ],
    },
    volume: {
      defaultImg: 'atlantico_sur_volumen_negro.png',
      alt: 'Atlántico Sur Volumen',
      tag: 'Volumen · Envase',
      switchers: [
        { key: 'doypack', img: 'atlantico_sur_volumen_negro.png', style: { backgroundColor: '#1a1a1a', border: '1px solid #1a1a1a' }, title: 'Doypack Negro' },
        { key: 'tubo', img: 'atlantico_sur_tubo.png', style: { background: 'linear-gradient(135deg, #333 50%, #c5a059 50%)', border: '1px solid #7e7d79' }, title: 'Tubo Cilíndrico de Cartón' },
      ],
    },
    specs: [
      { label: 'Premium Jar', value: 'Frasco de coordenadas (vidrio ámbar) o Frasco negro mate texturado con letras oro' },
      { label: 'Doypack / Tubo', value: 'Doypack negro mate con visor (500g) o Tubo cilíndrico de cartón negro con brújula' },
      { label: 'Tipografía', value: 'Sans-serif limpia y minimalista (estilo editorial)' },
      { label: 'Canal Comercial', value: 'Tiendas de diseño, delis gourmet y mercados de exportación' },
    ],
  },
  {
    id: '45° Sur',
    num: '04',
    archetype: 'Técnico / Industrial',
    title: '45° Sur',
    concept: 'Referencia directa a la latitud del origen extremo. Posiciona el producto como un registro mineral puro e intelectual.',
    premium: { img: '45_sur_premium.png', alt: '45° Sur Premium', tag: 'Premium · Frasco' },
    volume: { defaultImg: '45_sur_volumen.png', alt: '45° Sur Volumen', tag: 'Volumen · Doypack con Visor' },
    extra: { img: '45_sur_doypack_real.jpg', alt: '45° Sur Doypack Real', tag: 'Doypack · 45° Sur' },
    specs: [
      { label: 'Premium Jar', value: 'Botella de farmacia + tapa metálica + ficha técnica' },
      { label: 'Doypack Volumen', value: 'Negro mate + visor transparente + etiqueta tipo máquina de escribir' },
      { label: 'Tipografía', value: 'Monospace / Typewriter (estilo Le Labo)' },
      { label: 'Canal Comercial', value: 'Gastronomía de autor, restaurantes de lujo, catas' },
    ],
  },
];

const VOLUME_BRAND = {
  id: 'Sal de la Patagonia (Volumen)',
  num: '05',
  archetype: 'Eficiencia & Rotación Comercial',
  title: 'Sal de la Patagonia (Volumen)',
  concept: 'El motor de volumen y eficiencia operativa. Diseñado exclusivamente en formato Doypack para optimizar costos logísticos en retail y distribución masiva.',
  switchers: [
    { key: 'claro', img: 'sal_patagonia_volumen_claro.png', style: { backgroundColor: '#f4f1ec', border: '1px solid #7e7d79' }, title: 'Lino Claro' },
    { key: 'negro-ventana', img: 'v3_patagonia_doypack_window.png', style: { background: 'linear-gradient(135deg, #1a1a1a 50%, #f4f1ec 50%)', border: '1px solid #7e7d79' }, title: 'Negro con Ventana' },
    { key: 'negro-letras', img: 'sal_patagonia_volumen.png', style: { backgroundColor: '#1a1a1a', border: '1px solid #1a1a1a' }, title: 'Negro con Tipografía Blanca' },
  ],
  specs: [
    { label: 'Formato Único', value: 'Doypack stand-up de 500g de alta rotación' },
    { label: 'Variantes de Color', value: 'Lino claro (referencia), Negro mate con visor o Negro mate con tipografía blanca' },
    { label: 'Posicionamiento', value: 'Sal base pura (sin sabores añadidos) para el canal masivo y recarga' },
    { label: 'Canal Comercial', value: 'Supermercados, tiendas de retail y logística masiva B2B' },
  ],
};

function BrandCard({ brand, onLightbox }) {
  const [premiumImg, setPremiumImg] = useState(brand.premium?.defaultImg || brand.premium?.img);
  const [premiumKey, setPremiumKey] = useState(brand.premium?.switchers?.[0]?.key ?? null);
  const [volImg, setVolImg] = useState(brand.volume?.defaultImg);
  const [volKey, setVolKey] = useState(brand.volume?.switchers?.[0]?.key ?? null);

  return (
    <div className="brand-card fade-in">
      <div className="card-glow" />
      <div className="card-header">
        <div className="card-meta">
          <span className="card-num">Propuesta {brand.num}</span>
          <span className="archetype">{brand.archetype}</span>
        </div>
        <h2 className="card-title">{brand.title}</h2>
        <p className="brand-concept">{brand.concept}</p>
      </div>

      <div className="product-showcase">
        {/* Premium panel */}
        <div className="preview-box" onClick={(e) => { e.stopPropagation(); onLightbox(IMAGES_BASE + premiumImg, brand.title + ' - Premium'); }}>
          <div className="img-container">
            <img src={IMAGES_BASE + premiumImg} alt={brand.premium?.alt} loading="lazy" />
            <div className="zoom-icon">🔍</div>
          </div>
          <span className="preview-tag">{brand.premium?.tag}</span>
          {brand.premium?.switchers && (
            <div className="color-switcher">
              {brand.premium.switchers.map(sw => (
                <span key={sw.key} className={`color-btn${premiumKey === sw.key ? ' active' : ''}`} style={sw.style} title={sw.title}
                  onClick={(e) => { e.stopPropagation(); setPremiumImg(sw.img); setPremiumKey(sw.key); }} />
              ))}
            </div>
          )}
        </div>

        {/* Volume panel */}
        <div className="preview-box" onClick={(e) => { e.stopPropagation(); onLightbox(IMAGES_BASE + volImg, brand.title + ' - Volumen'); }}>
          <div className="img-container">
            <img src={IMAGES_BASE + volImg} alt={brand.volume?.alt} loading="lazy" />
            <div className="zoom-icon">🔍</div>
          </div>
          <span className="preview-tag">{brand.volume?.tag}</span>
          {brand.volume?.switchers && (
            <div className="color-switcher">
              {brand.volume.switchers.map(sw => (
                <span key={sw.key} className={`color-btn${volKey === sw.key ? ' active' : ''}`} style={sw.style} title={sw.title}
                  onClick={(e) => { e.stopPropagation(); setVolImg(sw.img); setVolKey(sw.key); }} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Extra panel - solo para marcas que lo definan (ej: 45 Sur doypack real) */}
      {brand.extra && (
        <div className="preview-box" style={{ marginTop: '1rem' }} onClick={(e) => { e.stopPropagation(); onLightbox(IMAGES_BASE + brand.extra.img, brand.title + ' - Doypack Real'); }}>
          <div className="img-container">
            <img src={IMAGES_BASE + brand.extra.img} alt={brand.extra.alt} loading="lazy" />
            <div className="zoom-icon">🔍</div>
          </div>
          <span className="preview-tag">{brand.extra.tag}</span>
        </div>
      )}

      <div className="specs-list">
        {brand.specs.map(spec => (
          <div key={spec.label} className="spec-item">
            <span className="spec-label">{spec.label}</span>
            <span className="spec-value">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VolumeBrandCard({ brand, onLightbox }) {
  const [currentImg, setCurrentImg] = useState(brand.switchers[1].img);
  const [activeKey, setActiveKey] = useState(brand.switchers[1].key);

  return (
    <div className="brand-card brand-card-single fade-in">
      <div className="card-glow" />
      <div className="card-header">
        <div className="card-meta">
          <span className="card-num">Propuesta {brand.num}</span>
          <span className="archetype">{brand.archetype}</span>
        </div>
        <h2 className="card-title">{brand.title}</h2>
        <p className="brand-concept">{brand.concept}</p>
      </div>

      <div className="product-showcase-single" style={{ marginBottom: '2rem' }}>
        <div className="preview-box" onClick={(e) => { e.stopPropagation(); onLightbox(IMAGES_BASE + currentImg, brand.title); }}>
          <div className="img-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '250px', background: 'radial-gradient(circle, #f4f1ec 0%, #e2ddd5 100%)', padding: '1.5rem', borderRadius: '4px' }}>
            <img src={IMAGES_BASE + currentImg} alt={brand.title} loading="lazy" style={{ maxHeight: '220px', objectFit: 'contain', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }} />
            <div className="zoom-icon">🔍</div>
          </div>
          <span className="preview-tag">Formato Único · Doypack 500g</span>
          <div className="color-switcher">
            {brand.switchers.map(sw => (
              <span key={sw.key} className={`color-btn${activeKey === sw.key ? ' active' : ''}`} style={sw.style} title={sw.title}
                onClick={(e) => { e.stopPropagation(); setCurrentImg(sw.img); setActiveKey(sw.key); }} />
            ))}
          </div>
        </div>
      </div>

      {/* Extra panel - solo para marcas que lo definan (ej: 45 Sur doypack real) */}
      {brand.extra && (
        <div className="preview-box" style={{ marginTop: '1rem' }} onClick={(e) => { e.stopPropagation(); onLightbox(IMAGES_BASE + brand.extra.img, brand.title + ' - Doypack Real'); }}>
          <div className="img-container">
            <img src={IMAGES_BASE + brand.extra.img} alt={brand.extra.alt} loading="lazy" />
            <div className="zoom-icon">🔍</div>
          </div>
          <span className="preview-tag">{brand.extra.tag}</span>
        </div>
      )}

      <div className="specs-list">
        {brand.specs.map(spec => (
          <div key={spec.label} className="spec-item">
            <span className="spec-label">{spec.label}</span>
            <span className="spec-value">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SalPatagoniaPage() {
  const [lightbox, setLightbox] = useState({ open: false, src: '', caption: '' });

  return (
    <div className="sal-patagonia-page">
      <div className="ambient-glow glow-1" />
      <div className="ambient-glow glow-2" />

      <div className="container">
        <div className="sal-patagonia-header fade-in">
          <span className="brand-badge">Expedición Patagónica · Cosecha 1898</span>
          <h1>Identidad de Marca &amp; Empaque</h1>
          <p className="header-desc">
            Revisa las cinco propuestas de branding a continuación. Cada concepto está diseñado tanto para la línea Premium (Frasco de vidrio) como para la línea de Volumen/Refill (Doypack mate o tubo de cartón).
          </p>
        </div>

        <div className="brands-grid">
          {BRANDS.map(brand => (
            <BrandCard key={brand.id} brand={brand} onLightbox={(src, cap) => setLightbox({ open: true, src, caption: cap })} />
          ))}
          <VolumeBrandCard brand={VOLUME_BRAND} onLightbox={(src, cap) => setLightbox({ open: true, src, caption: cap })} />
        </div>
      </div>

      {lightbox.open && (
        <div className="lightbox active" onClick={() => setLightbox({ open: false, src: '', caption: '' })}>
          <span className="lightbox-close">&times;</span>
          <img className="lightbox-content" src={lightbox.src} alt={lightbox.caption} />
          <div className="lightbox-caption">{lightbox.caption}</div>
        </div>
      )}
    </div>
  );
}
