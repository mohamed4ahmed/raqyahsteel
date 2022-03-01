import sanityClient from "@sanity/client";

export default sanityClient({
	projectId: "krn450bd",
	dataset: "production",
	// useCdn: "true",
});

