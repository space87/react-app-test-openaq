import './notification.css';

function Notification({ text }) {
    return (
        <section className="notification">
            <h3>{text}</h3>
         </section>
    )
}

export default Notification;