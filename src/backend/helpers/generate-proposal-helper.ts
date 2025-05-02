import { faker } from "@faker-js/faker";
import { GenerateProposalDTO } from "../dtos/generate-proposal-dto";

type Props = {
    city?: string;
    nameCompany?: string;
    descriptionProducts?: string;
    name?: string;
    introduction?: string;
    scope?: string;
    term?: string;
    value?: string;
    address?: string;
    phone?: string;
    partners?: string | undefined;
}

export function GenerateProposalHelper(props: Props): GenerateProposalDTO{
    return {
        city: props.city ?? faker.location.city(),
        nameCompany: props.nameCompany ?? faker.company.name(),
        descriptionProducts: props.descriptionProducts ?? faker.commerce.productDescription(),
        name: props.name ?? faker.person.fullName(),
        introduction: props.introduction ?? faker.lorem.paragraph(),
        scope: props.scope ?? faker.lorem.sentence(),
        term: props.term ?? `${faker.number.int({ min: 3, max: 12 })} meses`,
        value: props.value ?? faker.finance.amount({ min: 10000, max: 50000, }),          
        address: props.address ?? faker.location.streetAddress(),
        phone: props.phone ?? faker.phone.number({ style: "national" }),
        partners: props.partners ?? faker.person.fullName(),
    }
}