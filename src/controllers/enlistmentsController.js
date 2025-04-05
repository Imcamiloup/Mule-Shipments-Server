import { Enlistment, Driver } from "../database/db.js";
import { Op } from "sequelize";

export const getEnlistments = async (
  guide_number,
  state,
  distance,
  delivery_time,
  order_time,
  price_order,
  orderBy,
  orderDirection
) => {
  let where = {};

  if (guide_number)
    where = { ...where, guide_number: { [Op.like]: `%${guide_number}%` } };
  if (state) where = { ...where, state };
  if (distance) where = { ...where, distance };
  if (delivery_time) where = { ...where, delivery_time };
  if (order_time) where = { ...where, order_time };
  if (price_order) where = { ...where, price_order };
  let order = [];
  if (orderBy && orderDirection) order = [[orderBy, orderDirection]];

  const enlistments = await Enlistment.findAll({
    where,
    order,
    include: {
      model: Driver,
      attributes: ["id"],
      through: {
        attributes: [],
      },
    },
  });

  const enlistmentsMaped = enlistments.map((elem) => {
    return {
      id: elem.id,
      guide_number: elem.guide_number,
      state: elem.state,
      distance: elem.distance,
      delivery_time: elem.delivery_time,
      order_time: elem.order_time,
      price_order: elem.price_order,
      ordershipment_id: elem.ordershipment_id,
      drivers: elem.Drivers.map((elem) => elem.id),
    };
  });

  if (enlistmentsMaped.length === 0) throw Error("Enlistments not found");

  return enlistmentsMaped;
};

export const getEnlistmentById = async (id) => {
  const enlistmentById = Enlistment.findByPk(id);

  return enlistmentById;
};

export const getEnlistmentByGN = async (guide_number) => {
  const enlistmentByGN = Enlistment.findOne({ where: { guide_number } });

  return enlistmentByGN;
};

export const patchEnlistment = async (id, state, delivery_time) => {
  const enlistment = await Enlistment.findByPk(id);

  if (!enlistment) throw Error("No enlistment found");

  enlistment.state = state;
  enlistment.delivery_time = delivery_time;

  await enlistment.save();
};

export const deleteEnlistment = async (id) => {
  const enlistment = await Enlistment.findByPk(id);

  if (!enlistment) throw Error("No enlistment found");

  await enlistment.destroy();
};
