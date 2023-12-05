import './AppFooter.css'

export default function AppFooter() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <hr />
            <p className='footer'>Copyright &copy; {currentYear} Acme Ltd.</p>
        </>
    )
}