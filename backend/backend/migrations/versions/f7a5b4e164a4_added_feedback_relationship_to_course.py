"""Added feedback relationship to Course

Revision ID: f7a5b4e164a4
Revises: 72f9ee960f4b
Create Date: 2024-11-29 18:35:39.072121

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f7a5b4e164a4'
down_revision = '72f9ee960f4b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('feedback', schema=None) as batch_op:
        batch_op.add_column(sa.Column('course_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(None, 'courses', ['course_id'], ['id'], ondelete='CASCADE')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('feedback', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_column('course_id')

    # ### end Alembic commands ###
