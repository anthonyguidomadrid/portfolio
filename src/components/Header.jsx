export const Header = ({headerContent}) => {
    const { title, subtitle, image} = headerContent
    return (
        <div style={{backgroundImage: `url(${image?.url})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",}} className="h-screen">

        </div>
    )
}