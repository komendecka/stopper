import styles from './Container.scss'

const Container = props => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default Container;