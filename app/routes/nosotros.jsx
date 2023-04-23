import imagen from '../../public/img/nosotros.jpg';
import styles from '~/styles/nosotros.css';



export function meta() {
    return [
        {title: 'GuitarLA - Sobre Nosotros'},
        {description: 'Venta y asesoramiento de guitarras, blog sobre música'}
    ]
};

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
};

function Nosotros() {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>

            <div className="contenido">
                <img src={imagen} alt="imagen sobre nosotros" />

                <div>
                    <p>Suspendisse aliquet luctus metus. Integer sem tortor, commodo sit amet leo et, congue porttitor elit. Mauris eget tortor dictum libero interdum malesuada a sed diam. Vivamus quis ante vitae urna blandit volutpat nec vulputate odio. Vestibulum gravida, risus sed tempor tincidunt, odio nisi porta erat, et commodo mi felis ut mi. Cras hendrerit tempus posuere.</p>

                    <p> Proin non lacinia arcu, ac lacinia enim. Morbi fermentum sem sit amet vehicula porttitor. Aliquam fringilla enim neque, et mattis mauris blandit sollicitudin. Proin risus ligula, sodales ut aliquet eget, rhoncus eget mi. Vivamus in iaculis nunc, non ultricies turpis. Vivamus quis ante vitae urna blandit volutpat nec vulputate odio. Vestibulum gravida, risus sed tempor.</p>
                </div>
            </div>
        </main>
    )
};

export default Nosotros;