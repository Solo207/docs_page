import { Outlet, useOutletContext } from 'react-router-dom'
import AccordionSidebar from '../../components/AccordionSidebar/AccordionSidebar'
import { SECTIONS } from './productsData'
// ...your other existing imports

function ProductsLayout() {
  const { navOpen, setNavOpen } = useOutletContext()

  return (
    <>
      <AccordionSidebar
        sections={SECTIONS}
        basePath="/products"
        open={navOpen}
        onLinkClick={() => setNavOpen(false)}
      />
      <main className="content">
        <Outlet />
      </main>
    </>
  )
}

export const TAB = {
  label: 'Products',
  path: '/products',
  children: SECTIONS.map((sec) => ({
    label: sec.label,
    path: `/products/${sec.slug}`,
  })),
}
export default ProductsLayout