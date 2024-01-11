

export default function Layout({ children }: { children: React.ReactNode }) {
    return (<div className="text-center sm:m-20 m-4" id="main">
        {children}
    </div>)
}
