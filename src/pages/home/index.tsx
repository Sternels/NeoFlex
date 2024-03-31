import { Modal } from "components";
import { ProductCatalog } from "components/modules";
import { useCallback, useState } from "react";

export const HomePage = ({}) => {

	const [showModal, setShowModal] = useState<boolean>(false);

    const handlerCloseModal = useCallback(() => {
        setShowModal(false);
    }, [showModal])


	return (
		<>
		<button onClick={() => setShowModal(true)}>Open Modal</button>
			{showModal && <Modal handlerClose={handlerCloseModal}  title="Что-то тут"/>}
		<ProductCatalog/>
		</>
	);
};

