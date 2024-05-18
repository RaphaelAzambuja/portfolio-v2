import styles from "./skills.module.scss";

export default function Skills() {
	const services = [
		{ name: "<Criação />", description: "Crio soluções personalizadas para seu negócio, como Landing pages, sistemas e aplicativos web, assim otimizando seus processos." },
		{ name: "<Manutenção />", description: "Presto serviços de manutenção e finalização de sites e sistemas. Corrijo bugs, otimizo o desempenho e implemento novas funcionalidades." },
		{ name: "<Integração />", description: "Integro serviços em aplicativos e sistemas já existentes, garantindo que as plataformas de tecnologia trabalhem juntas." },
	];

	return (
		<>
			<h2 className={styles.title}>Competências</h2>
			<div className={styles.box}>
				{services.map((service, index) => (
					<div className={styles.skill} key={index}>
						<div className={styles.name}>{service.name}</div>
						<p>{service.description}</p>
					</div>
				))}
			</div>
		</>
	);
};
